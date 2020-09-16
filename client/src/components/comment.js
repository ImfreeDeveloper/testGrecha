import React from 'react';

const Comment = ({children}) => {
  return (
    <article className="media">
      <div className="media-left">
        <p className="image is-64x64">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </p>
      </div>
      <div className="media-content">
        <div className="content">
          <p><strong>Barbara Middleton</strong><br />19.09.2020</p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies
                    elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
          <br />
        </div>
        { children }
      </div>
    </article>
  );
}

export default Comment;


// const items = [
//   {
//     id: 1,
//     name: "Папка 1",
//     values: [
//       {
//         id: 2,
//         name: "Подпапка 1",
//         values: [
//           {
//             id: 3,
//             name: "Подпапка 2"
//           },
//           {
//             id: 4,
//             name: "Подпапка 3",
//             values: []
//           }
//         ]
//       },
//       {
//         id: 5,
//         name: "Папка 2",
//         values: []
//       }
//     ]
//   }
// ];

// function ListItem({ item }) {
//   let children = null;
//   if (item.values && item.values.length) {
//     children = (
//       <ul>
//         {item.values.map(i => (
//           <ListItem item={i} key={i.id} />
//         ))}
//       </ul>
//     );
//   }

//   return (
//     <li>
//       {item.name}
//       {children}
//     </li>
//   );
// }
