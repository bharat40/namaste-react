import { WRAP_IMAGE_URL } from "../utils/constants";
import AddButton from "./AddButton";
const SignatureList = () => {
  return (
    <div className="flex justify-between my-5">
      <div className="text-left">
        <h1>Aloo Patty Signature Wrap</h1>
        <h1>$250</h1>
        <p>Enjoy your favourite Signature wrap</p>
      </div>
      <div>
        <img src={WRAP_IMAGE_URL} alt="signature-wrap-image" className="h-24" />
        <AddButton />
      </div>
    </div>
  );
};
export default SignatureList;
