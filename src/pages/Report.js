import React, { useEffect, useState } from "react";
import { useTheme } from "../components/context/ThemeContext";
import accountService from "../components/services/accountService";
import Select from "react-select";

const Report = () => {
  const darkTheme = useTheme();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#171717",
    color: darkTheme ? "#CCC" : "#333",
  };
  const [selectOptions, setSelectOptions] = useState([]);
  const [selectOptions2, setSelectOptions2] = useState(null);

  useEffect(() => {
    const _accountService = new accountService();

    _accountService.regionsAll().then((res) => {
      const data = res.data;
      const options = data.map((region) => ({
        value: region.Key,
        label: region.Value,
      }));

      setSelectOptions(options);
    });
  }, []);

  const handleChange = (e) => {
    const _accountService = new accountService();
    const url = `http://45.159.196.58:7447/v1/areas/${e.value}/all`;
    _accountService.regionId(url).then((result) => {
      const data2 = result.data;
      const options2 = data2.map((area) => ({
        value: area.Key,
        label: area.Value,
      }));
      setSelectOptions2(options2);
    });
  };

  return (
    <>
      <div style={themeStyles} className="reports">
        <Select options={selectOptions} onChange={handleChange} />
        {selectOptions2 != null ? (
          <Select options={selectOptions2} onChange={handleChange} />
        ) : (
          <Select options={null} onChange={handleChange} />
        )}
      </div>
    </>
  );
};

export default Report;
