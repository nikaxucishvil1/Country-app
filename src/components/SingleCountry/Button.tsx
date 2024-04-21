interface SingleButton {
  data: string[];
}

const Button = (props: SingleButton) => {
  const { data } = props;
  return (
    data &&
    data.map((item: string) => {
      return <button className="borderBtn">{item}</button>;
    })
  );
};

export default Button;
