import axios from "axios";
import { useState, useEffect } from "react";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useRequireLogin } from "../../hooks/useRequireLogin";
import { CURRENTUSER } from "../../types/currentUser";
import { FAVPRODUCT } from "../../types/fav";
interface Props {
  currentUser: CURRENTUSER;
}
const FavProduct: React.FC<Props> = ({ currentUser }) => {
  // ログイン必須、CSR、1つ1つをProductCompへ代入
  const [favProducts, setFavProducts] = useState<FAVPRODUCT[] | null>();
  useRequireLogin();
  useEffect(() => {
    if (!currentUser) {
      return null;
    } else {
      const fetchFavProducts = async () => {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/fav-list/`,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(
                localStorage.getItem("access_token")
              )}`,
            },
          }
        );
        setFavProducts(res.data);
      };
      fetchFavProducts();
    }
  }, []);
  return (
    <>
      <p>fav</p>
      {favProducts &&
        favProducts.map((favProduct: FAVPRODUCT) => (
          <p key={favProduct.product.id}>{favProduct.product.name}</p>
        ))}
    </>
  );
};
export default FavProduct;
