import React, { useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { doSignOut } from "../../firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Onboard = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const users = [
    "ela@gmail.com",
    "yosr@gmail.com",
    "eya@gmail.com",
    "ahmed@gmail.com",
  ];
  const emails = [
    {
      id: 1,
      subject: "Welcome to the team!",
      message:
        "Dear [Recipient],\n\nWe are excited to welcome you to our team! We look forward to working together and achieving great things.\n\nBest regards,\n[Your Company]",
    },
    {
      id: 2,
      subject: "Looking forward to seeing you!",
      message:
        "Dear [Recipient],\n\nWe can't wait to meet you and get started on our journey together. Please let us know if you have any questions before your first day.\n\nBest regards,\n[Your Company]",
    },
    {
      id: 3,
      subject: "Onboarding starts tomorrow!",
      message:
        "Dear [Recipient],\n\nWe are thrilled to begin the onboarding process with you tomorrow. Please make sure to bring any necessary documents and be ready for an exciting day.\n\nBest regards,\n[Your Company]",
    },
    {
      id: 4,
      subject: "Important Information Regarding Your Onboarding",
      message:
        "Dear [Recipient],\n\nWe have some important updates regarding your upcoming onboarding process. Please review the attached documents and let us know if you have any questions.\n\nBest regards,\n[Your Company]",
    },
    {
      id: 5,
      subject: "Schedule Reminder: Onboarding Session",
      message:
        "Dear [Recipient],\n\nJust a friendly reminder about your upcoming onboarding session scheduled for [Date]. We look forward to meeting you!\n\nBest regards,\n[Your Company]",
    },
  ];

  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [isEditable, setIsEditable] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleEdit = () => {
    setIsEditable(true);
  };
  const handleEmailSelection = (email) => {
    setSelectedEmail(email);
  };
  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div
      style={{
        background: "rgb(102,175,255)",
        background:
          "linear-gradient(149deg, rgba(102,175,255,1) 0%, rgba(245,245,245,1) 36%, rgba(245,245,245,1) 61%, rgba(102,175,255,1) 100%)",
      }}
      className="onboard h-screen"
    >
      <div className="absolute top-0 left-0 p-10">
        <Link smooth to="/onboard">
          <h1 className="font-thin text-4xl text-gray-900 ">ONBOARDIO</h1>
        </Link>
      </div>
      <div className="absolute top-0 right-0 p-6">
        <div className="text-black bg-blue-400  inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-full sm:w-auto sm:mb-0 group">
          Hello,{" "}
          {currentUser.displayName
            ? currentUser.displayName
            : currentUser.email}
        </div>
      </div>
      <div className="flex justify-center font-bold text-2xl mt-40 mb-7 ">
        <h1 className="text-center ">Boss, No Time Today? 💃 </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {/* User selection section */}

        <div className=" p-4 inline-flex items-center justify-center">
          {/* Search Bar */}

          {/* User List */}
          <ul>
            <li>
              <input
                type="text"
                placeholder="Search email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ borderRadius: 20 }}
                className="mt-1 p-3 block w-80 border bg-white border-blue-500 hover:border-blue-700  focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </li>
            {filteredUsers.map((user, index) => (
              <li
                key={index}
                style={{ borderRadius: 20 }}
                className={`mt-1 p-3 block w-80 border bg-white border-blue-500 hover:border-blue-700  focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${
                  selectedUser === user ? "bg-blue-200" : ""
                }`}
                onClick={() => setSelectedUser(user)}
              >
                {user}
              </li>
            ))}
          </ul>
        </div>
        {/* Email selection section */}

        <div className=" p-2 inline-flex items-center justify-center">
          <ul>
            {emails.map((email) => (
              <li
                key={email.id}
                style={{ borderRadius: 20 }}
                className={`mt-1 p-3 block w-80 border bg-white border-blue-500 hover:border-blue-700  focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${
                  selectedEmail === email ? "bg-blue-200" : ""
                }`}
                onClick={() => handleEmailSelection(email)}
              >
                {email.subject}
              </li>
            ))}
          </ul>
        </div>

        <div className=" bg-white rounded-lg overflow-hidden shadow-md mr-10">
          <div className="p-4">
            <div className="mb-4">
              <p className="text-gray-700 mb-1">
                <strong>To:</strong>{" "}
                {selectedUser ? selectedUser : "receiver@example.com"}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Subject:</strong>{" "}
                {selectedEmail ? selectedEmail.subject : "Your subject here"}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-gray-700 mb-1">
                <strong>Message:</strong>
              </p>
              <textarea
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-400"
                rows="6"
                placeholder="Your message here..."
                value={selectedEmail ? selectedEmail.message : ""}
                readOnly={!isEditable}
                onChange={(e) =>
                  setSelectedEmail((prevEmail) => ({
                    ...prevEmail,
                    message: e.target.value,
                  }))
                }
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md mr-2"
                onClick={handleEdit}
              >
                Edit
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          doSignOut().then(() => {
            navigate("/login");
          });
        }}
        className="fixed bottom-0 right-0 m-4 text-sm text-blue-600 underline"
      >
        Logout
      </button>
    </div>
  );
};

export default Onboard;
