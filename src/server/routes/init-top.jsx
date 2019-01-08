import reducer from "../../client/reducers";

export default function initTop() {
  return {
    reducer,
    initialState: {
      checkBox: { checked: false },
      number: { value: 200 },
      username: { value: "" },
      textarea: { value: "" },
      selectedOption: { value: "0-13" }
    }
  };
}
