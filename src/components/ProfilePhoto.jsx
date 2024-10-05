import { RiAccountCircleFill } from "react-icons/ri";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";

const ProfilePhoto = () => {
  return (
    <>
      <div>
        <div className="flex justify-center items-center space-x-2">
          <div>
            <RiAccountCircleFill className="w-12 h-12" />
          </div>
          <div className="flex border-2 border-orange-500 text-orange-500 rounded-full p-1 space-x-1 ">
            <div>
              <RiMoneyRupeeCircleLine className="w-6 h-6" />
            </div>
            <p className="font-bold">5000</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePhoto;
