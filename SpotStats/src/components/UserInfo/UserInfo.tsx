
interface UserInfoProps {
  userName?: string;
  userPfp?: string;
  followers?: number;
}


const UserInfo = ({ userName, userPfp, followers }: UserInfoProps): JSX.Element => {
  return (
   <div className = "flex gap-2">
      <img 
        className = "w-28 h-24 rounded-md border-1 "
        src={userPfp} 
        alt="user profile picture" 
      />
      <div>
        <h1 
          className = "text-teal-500 text-2xl font-main font-semibold"
        >
          {userName}
        </h1>
        <p className = "font-main text-sm text-gray-500">
          {followers ?? 0}
          {followers && followers <= 1 ? ' follower' : ' followers'}
        </p>
      </div>
   </div>
  )
}

export default UserInfo