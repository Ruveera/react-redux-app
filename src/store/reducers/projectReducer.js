const initState = {
  projects: [
    { id: "1", title: "help me", content: "blah blah blah" },
    { id: "2", title: "help you", content: "blah blah blah" },
    { id: "3", title: "help us", content: "blah blah blah" },
  ],
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
