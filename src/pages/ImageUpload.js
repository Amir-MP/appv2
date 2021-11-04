import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import "../App.css";
import { useTheme } from "../components/context/ThemeContext";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const ImageUpload = () => {
  const [optionSelect, SetoptionSelect] = useState([]);
  const options = [
    { value: "React", label: "React" },
    { value: "VueJS", label: "VueJS" },
    { value: "AngularJS", label: "AngularJS" },
    { value: "NextJS", label: "NextJS" },
    { value: "nodeJS", label: "nodeJS" },
    { value: "ExpressJS", label: "ExpressJS" },
    { value: "ReactQuery", label: "ReactQuery" },
  ];
  const animatedComponents = makeAnimated();
  const darkTheme = useTheme();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#171717 ",
    color: darkTheme ? "#CCC" : "#333",
  };

  const [files, setFiles] = useState([]);

  const handleInit = (e) => {
    console.log("FilePond instance has initialised");
  };

  return (
    <div style={themeStyles} className="imageupload">
      <h1>لطفا فایل مورد نظر را آپلود کنید</h1>
      <FilePond
        className="filepond"
        files={files}
        allowMultiple={true}
        allowReorder={true}
        maxFiles={3}
        server="http://45.159.196.58:7447/v1/files"
        name="file"
        oninit={handleInit()}
        onupdatefiles={(fileItems) => {
          setFiles({
            files: fileItems.map((fileItem) => fileItem.file),
          });
        }}
      />
      <h1>لطفا تخصص مورد نظر را انتخاب کنید</h1>
      <Select
        className="mySelect"
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={options}
        onChange={SetoptionSelect}>
        {console.log(optionSelect)}
      </Select>
    </div>
  );
};

export default ImageUpload;
