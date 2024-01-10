import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useProductQueryStore from "../services/store";
import { useNavigate } from "react-router-dom";


export const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
const setSearchText = useProductQueryStore(s=> s.setSearchText);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {setSearchText(ref.current.value)
        navigate('/');
        }
        
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search products..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};
