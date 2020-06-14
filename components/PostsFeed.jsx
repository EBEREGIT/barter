import React, { Fragment, useState, useEffect } from 'react';
import { Card } from 'react-bootstrap/';

const CardComponent = () => {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Body>
        <div className='table-responsive'>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>Want</th>
                <th scope='col'>Give</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Something</td>
                <td>Another thing</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Card.Link href='#'>08031904145</Card.Link>
        <Card.Link href='#'>Njoku Samson Ebere</Card.Link>
        <Card.Link href='#'>Enugu</Card.Link>
        <Card.Link href='#'>3h ago</Card.Link>
        <Card.Link href='#'>Delete</Card.Link>
      </Card.Body>
    </Card>
  );
};

class PostsFeed extends React.Component {
  state = { items: [] };

  render() {
    const { hounds } = this.props;
    console.log(hounds);
    const { items } = this.state;
    return (
      <Fragment>
        {items &&
          items.length > 0 &&
          items.map((item) => {
            return <CardComponent />;
          })}
      </Fragment>
    );
  }
}

export default PostsFeed;

// export default function PostsFeed() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetch('https://dog.ceo/api/breeds/list/all')
//       .then((data) => data.json())
//       .then((jsonData) => {
//         console.log(jsonData);
//       });
//     const mockItems = [{ name: '' }, { name: 'gdhghd' }];
//     setItems(mockItems);
//     return () => {
//       cleanup;
//     };
//   }, []);
//   console.log(items);
//   return (
//     <Fragment>
//       {items &&
//         items.length > 0 &&
//         items.map((item) => {
//           return <CardComponent />;
//         })}
//     </Fragment>
//   );
// }
