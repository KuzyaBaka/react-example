import React from "react";

export default class Button extends React.Component {
  // Отвечает за отрисовку

  /* constructor(props) {
    super(props);
    this.state = {
      // state - это только объект и ничего больше
      count: 0,
    };
  }

  handleInc = () => {
    // this.setState({ count: this.state.count + 1 });

    // Это колбэк функция (батчинг)
    this.setState((prev) => ({ count: prev.count + 1 }));
    this.setState((prev) => ({ count: prev.count + 1 }));
  }; */

  constructor(props) {
    super(props);
    this.state = {
      name: true,
    };
  }

  handleName = () => {
    this.setState({name: !this.state.name})
  };

  render() {
    /* const { text } = this.props;
    const { count } = this.state;
    return (
      <button onClick={this.handleInc}>
        {text} {count}
      </button>
    ); */
    // Здесь начинается кнопка, меняющая название

    const { name } = this.state;
    return <button onClick={this.handleName}>{name ? `class` : `func`}</button>;
  }
}

// this.props - это основная часть, text - это свойство
// В реакте используется XML разметка

/* Жизненный цикл компонента
1. Монтирование - сначала меняется что-то в ДОМе реакта, потом в ДОМе JS
  1.1 Конструктор (здесть происходит инициализация) constructor(){}
  1.2 Component Did Mount(СРАБАТЫВАЕТ ОДИН РАЗ){Асинхронная функция(fetch)} 
  1.3 Render(){После рендера идёт 1.2} 
  1.4 Component Did Update(){Сравнивет props и состояние}
2. Обновление (Update) 
  2.1 Shoot Components Update(Смотит поменялось ли что-то на сервере)
  2.2 ComponentWillUnmount(){} */
