import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import LogoBar from "../../components/LogoBar";
import { toast } from "react-toastify";
import { BsPersonCircle } from "react-icons/bs";

const AttendanceTable = () => {
  const navigate = useNavigate();
  const [persons, setPersons] = useState([]);
  const [showModal, setShowModal] = useState(true);

  const [personInModal, setPersonInModal] = useState(null);

  const logOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/login");
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      return;
    }
    const fetchAttendance = async () => {
      try {
        const { data: responseData } = await axios.get(
          "https://test.nexisltd.com/test",
          {
            headers: {
              Authorization: `bearer ${accessToken}`,
            },
          }
        );
        console.log("Response Data", responseData);
        setPersons(Object.values(responseData));
      } catch (err) {
        console.log("Data Fetch Error", err);
        if (err.response.data.error.startsWith("token is expired")) {
          toast.error("Session expired!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          logOut();
        }
      }
    };

    fetchAttendance();
  }, []);

  if (!localStorage.getItem("access_token")) {
    return <Navigate to="/login" replace />;
  }

  console.log("Persons", persons);

  return (
    <section className="container p-8 mx-auto">
      <LogoBar />
      <p className="text-right">
        <button
          onClick={logOut}
          className="bg-red-500 text-white px-4 rounded-md py-2"
        >
          Log Out
        </button>
      </p>
      <h1 className="my-4 text-3xl text-center text-primary font-semibold">
        Attendance Book
      </h1>

      {/* Table Start */}
      <div className="overflow-x-auto">
        <table className="table border-collapse table-auto mx-auto">
          <thead className="table-header-group">
            <tr className="table-row">
              <th className="table-cell border px-4 py-2">
                <BsPersonCircle />
              </th>
              <th className="table-cell border px-4 py-2">Name</th>
              <th className="table-cell border px-4 py-2">Position</th>
              <th className="table-cell border px-4 py-2">Branch</th>
              <th className="table-cell border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="table-row-group">
            {persons.map((person) => (
              <tr key={person.id} className="table-row">
                <td className="table-cell border px-4 py-2">
                  <img
                    className="rounded-full w-5 h-5"
                    src={person.profile_pic}
                  />
                </td>
                <td className="table-cell border px-4 py-2">{person.name}</td>
                <td className="table-cell border px-4 py-2">
                  {person.position}
                </td>
                <td className="table-cell border px-4 py-2">{person.branch}</td>
                <td className="table-cell border px-4 py-2">
                  <button
                    onClick={() => {
                      setPersonInModal(person);
                      setShowModal(true);
                    }}
                    className="bg-primary text-white px-4 rounded-md py-2"
                  >
                    See Entries
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Table End */}

      {/* Modal Start  */}
      {showModal && personInModal && (
        <div className="w-screen h-screen bg-[#00000099] fixed top-0 left-0 grid place-items-center">
          <div className="overflow-y-auto w-4/5 lg:w-1/3 h-4/5 bg-[#FFFFFFFF] p-8 h-4/5 opacity-100">
            <p className="text-right">
              <button
                onClick={() => {
                  setShowModal(false);
                }}
                className="bg-primary text-white px-4 rounded-md py-2"
              >
                Close
              </button>
            </p>
            <p className="font-semibold text-2xl">{personInModal.name}</p>
            <p>{personInModal.position}</p>
            <p className="mb-4">{personInModal.branch}</p>
            {Object.keys(personInModal.attendance).map((date, index) => (
              <p key={index}>
                {date}: {personInModal.attendance[date].status}
              </p>
            ))}
          </div>
        </div>
      )}
      {/* Modal End  */}
    </section>
  );
};

export default AttendanceTable;
