import { useContext } from "react";
import { RefetchContext } from "../providers/RefetchProvider";

const useRefetch = () => {
    return useContext(RefetchContext);
};

export default useRefetch;