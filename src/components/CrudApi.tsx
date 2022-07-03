import React, { useEffect, useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import Message from "./Message";
import {
  HashRouter,
  Link,
  NavLink,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Error404 from "../pages/Error404";

interface formData {
  name: string;
  university: string;
  id: number | null;
}

interface error {
  status: string;
  statusText: string;
}

const CrudApi = () => {
  const [db, setDb] = useState<formData[]>([]);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState<error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  let api = helpHttp();
  let url = "http://localhost:5000/estudiantes";

  useEffect(() => {
    setLoading(true);

    api.get(url).then((res) => {
      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setDb([]);
        setError(res);
      }
    });

    setLoading(false);
  }, []);

  const createData = (data: any) => {
    data.id = Date.now();
    setDb([...db, data]);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data: any) => {
    let endpoint = `${url}/${data.id}`;

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id: number) => {
    let isDetele = window.confirm(
      `Are you sure to delete this register with the id ${id}`
    );

    if (isDetele) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD API</h2>
      <article className="grid-1-2">
        <HashRouter basename="student">
          <header>
            <h2>CRUD API con Rutas</h2>
            <nav>
              <NavLink to="/" className="active">
                Student
              </NavLink>
              <NavLink to="/add" className="active">
                Add
              </NavLink>
            </nav>
          </header>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  {loading && <Loader />}{" "}
                  {/* When loading is true active Loader...  */}
                  {error && (
                    <Message
                      msg={`Error ${error.status}:${error.statusText}`}
                      bgColor="#dc3545"
                    />
                  )}
                  {/* When error is true active Message...  */}
                  {db && (
                    <CrudTable
                      data={db}
                      setDataToEdit={setDataToEdit}
                      deleteData={deleteData}
                    />
                  )}
                </>
              }
            />
            <Route
              path="/add"
              element={
                <CrudForm
                  createData={createData}
                  updateData={updateData}
                  dataToEdit={dataToEdit}
                  setDataToEdit={setDataToEdit}
                />
              }
            />
            <Route
              path="/edit/:id"
              element={
                <CrudForm
                  createData={createData}
                  updateData={updateData}
                  dataToEdit={dataToEdit}
                  setDataToEdit={setDataToEdit}
                />
              }
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </HashRouter>
      </article>
    </div>
  );
};

export default CrudApi;
