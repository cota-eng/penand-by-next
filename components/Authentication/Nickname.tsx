import { useEffect,useState } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  nickname: string;
};

const Nickname: React.FC = () => {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  useEffect(() => {
    //   const res = fetch()
  },[])
  const [nickname,setNickname]=useState<string>("")
    return <div>
        {/* <form onSubmit={handleSubmit(onSubmit)}>
            <input name="nicjname" defaultValue=
      </form> */}
  </div>;
};

export default Nickname;
