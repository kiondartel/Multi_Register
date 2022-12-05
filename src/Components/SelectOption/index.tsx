import * as Styled from "./styles";

type Props = {
  title: String;
  description: String;
  selected: boolean;
  onClick: () => void;
};

const Option = ({ title, description, selected, onClick }: Props) => {
  return (
    <Styled.Container onClick={onClick} selected={selected}>
      <Styled.Info>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
      </Styled.Info>
    </Styled.Container>
  );
};

export default Option;
