import TransacrtionSpinner from "./TransacrtionSpinner"

const TableSkeleton = () => {
  return (
    <>
        <div className=" p-2 ">
        {/* Table */}
        <table className="w-full border-collapse ">
            <thead className="bg-[#FFF2D8]">
                <tr className="text-[#9C9C9C] uppercase text-[18px] font-bold">
                    <th className="py-2 px-4 text-left">User ID</th>
                    <th className="py-2 px-4 text-left">Full Name</th>
                    <th className="py-2 px-4 text-left">Email</th>
                    <th className="py-2 px-4 text-left">Phone</th>
                </tr>
            </thead>

            <div className=" absolute inset-0 flex items-center justify-center bg-white/50 z-10">
            <TransacrtionSpinner  />
            </div>
        </table>
    </div>
    </>
  )
}

export default TableSkeleton