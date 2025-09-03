import React, { memo, PureComponent, Component } from "react";

type IUser = {
  name: string;
  age: number;
};

type IProps = {
  user: IUser;
};

// functional component
const FirstComponent = memo(({ name, age }: IUser) => (
  <div>
    my name is {name}, my age is {age}
  </div>
));

// functional component
// Этот компонент является необязательным для выполнения задания, но продемонстрирует глубину знаний в React.
const SecondComponent = memo(
  ({ user: { name, age } }: IProps) => (
    <div>
      my name is {name}, my age is {age}
    </div>
  ),
  (prevProps, nextProps) =>
    prevProps.user.name === nextProps.user.name &&
    prevProps.user.age === nextProps.user.age
);

// class component
class ThirdComponent extends PureComponent<IUser> {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        my name is {name}, my age is {age}
      </div>
    );
  }
}

// class component
class FourthComponent extends Component<IProps> {
  shouldComponentUpdate(nextProps: IProps) {
    return (
      this.props.user.name !== nextProps.user.name ||
      this.props.user.age !== nextProps.user.age
    );
  }

  render() {
    const { name, age } = this.props.user;
    return (
      <div>
        my name is {name}, my age is {age}
      </div>
    );
  }
}
