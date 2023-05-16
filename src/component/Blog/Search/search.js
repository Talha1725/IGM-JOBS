import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <InputGroup>
      <FormControl type="search" placeholder="Search" aria-label="Search" />
      <Button variant="primary">
        <FaSearch />
      </Button>
    </InputGroup>
  );
}

export default SearchBar;
