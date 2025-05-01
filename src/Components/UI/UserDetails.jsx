
const UserDetails = ({onClick, user}) => {


  return (
    <>
      <tr
      onClick={onClick}
                            key={user.id}
                            className="border-b p-[10px] gap-[10px] border-[#DFDFDF] text-[#261000] text-[14px] font-normal"
                        >
                            <td className=" p-[10px] gap-[10px] ">{user.id}</td>
                            <td className=" p-[10px] gap-[10px]">
                                {user.fullName}
                            </td>
                            <td className=" p-[10px] gap-[10px]">
                                {user.email}
                            </td>
                            <td className=" p-[10px] gap-[10px]">
                                {user.phone}
                            </td>
                            <td className=" p-[10px] gap-[10px]">
                                {user.sex}
                            </td>
                            <td className=" p-[10px] gap-[10px]">
                                {user.class}
                            </td>
                        </tr>    
    </>
  )
}

export default UserDetails