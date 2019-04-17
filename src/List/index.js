import React from 'react';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 1, name: 'apple', meaning: '苹果' },
        { id: 2, name: '‘pear’', meaning: '梨' },
        { id: 3, name: '‘peach’', meaning: '桃子' },
      ]
    }
  }

  render() {
    const { list } = this.state;
    return (
    <React.Fragment>
      <div>
        列表渲染
      </div>
      <div>
        {
          list.map((item) => {
            return <p key={item.id}>{item.meaning}</p>
          })
        }
      </div>
      </React.Fragment>
    );
  }
}