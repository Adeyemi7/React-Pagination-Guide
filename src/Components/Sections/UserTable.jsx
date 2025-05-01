import { useEffect, useState } from "react";
import TableSkeleton from "../UI/TableSkeleton";
import PaginationComponent from "../UI/PaginationComponent";
import SearchBar from "../../Components/UI/SearchBar";
import NextButton from "../Icons/NextButton";
import PreviousButton from "../Icons/PreviousButton";
import UserDetails from "../UI/UserDetails";
import { Users } from "../../Constant/index";

const UserTable = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const userPerPage = 4;

  const [searchUsers, setSearchUsers] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(Users);

  const pageCount = Math.ceil(Users.length / userPerPage);
  const currentUsers = filteredUsers.slice(
    currentPage * userPerPage,
    (currentPage + 1) * userPerPage
  );

  const handleNextPage = (selectedItem) => {
    setCurrentPage(selectedItem.selected);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [currentPage]);

  useEffect(() => {
    if (!searchUsers) {
      setFilteredUsers(Users);
    } else {
      const filtered = Users.filter(
        (transaction) =>
          transaction.fullName
            .toLowerCase()
            .includes(searchUsers.toLowerCase()) ||
          transaction.email.toLowerCase().includes(searchUsers.toLowerCase()) ||
          transaction.class.toLowerCase().includes(searchUsers.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [searchUsers]);

  if (isLoading) {
    return isLoading && <TableSkeleton />;
  }

  return (
    <div className="p-2">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-[16px] text-[#261000] font-bold">
          {" "}
          Total users : {filteredUsers.length}
        </h1>
        <SearchBar
          type={"text"}
          placeholder="Search Users"
          className="h-[45px] rounded-md border-[1px] outline-none p-2 w-full bg-[#F9F9F9]"
          value={searchUsers}
          onChange={(e) => setSearchUsers(e.target.value.trim())}
        />
      </div>

      {/* Table */}
      <table className="w-full border-collapse mb-4">
        <thead className="bg-[#FFF2D8]">
          <tr className="text-[#9C9C9C] uppercase text-[18px] font-bold">
            <th className="py-2 px-4 text-left">User ID</th>
            <th className="py-2 px-4 text-left">Full Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Phone</th>
            <th className="py-2 px-4 text-left">Sex</th>
            <th className="py-2 px-4 text-left">Class</th>
          </tr>
        </thead>

        <tbody>
          {currentUsers.length > 0 ? (
            currentUsers.map((user) => (
              <UserDetails key={user.id} user={user} />
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center py-4">
                No user found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <section className="flex justify-between items-center justify-items-center bg-[#FFF2D8] p-2 rounded-[8px] px-8">
        <div className="text-center text-sm text-[#9C9C9C]">
          Showing {currentPage * userPerPage + 1} to{" "}
          {Math.min((currentPage + 1) * userPerPage, filteredUsers.length)} of{" "}
          {filteredUsers.length} users
        </div>

        <PaginationComponent
          previousLabel={<PreviousButton className="h-6 w-6 hover:white" />}
          nextLabel={<NextButton className="h-6 w-6 hover:white" />}
          breakLabel="..."
          pageCount={pageCount}
          marginPagesDisplayed={"1"}
          pageRangeDisplayed={3}
          handlePageClick={handleNextPage}
          containerClassName="flex justify-center items-center place-items-center gap-2"
          pageClassName="flex"
          pageLinkClassName="flex items-center justify-center h-8 w-8 rounded hover:bg-[#D0940E] text-[#261000]"
          activeClassName="bg-[#D0940E] rounded text-[#ffff]"
          previousClassName="flex text-[#ffff]"
          nextClassName="flex"
          previousLinkClassName="flex items-center justify-center h-8 w-8 rounded hover:bg-[#D0940E] text-[#261000] disabled:text-[#9C9C9C] disabled:cursor-not-allowed"
          nextLinkClassName="flex items-center justify-center mr-4 h-8 w-8 rounded hover:bg-[#D0940E] text-[#261000] disabled:text-[#9C9C9C] disabled:cursor-not-allowed"
          breakClassName="flex items-center justify-center h-8 w-8 text-[#9C9C9C]"
          disabledClassName="opacity-50 cursor-not-allowed"
          disableInitialCallback={true}
          forcePage={currentPage}
        />
      </section>
    </div>
  );
};

export default UserTable;
