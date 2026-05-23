// import { useNavigate } from 'react-router-dom';

// export default function TopBar({ title, showBack = false }) {
//   const navigate = useNavigate();
//   return (
//     <div className="top-bar">
//       {showBack && (
//         <button className="top-bar__back" onClick={() => navigate(-1)}>
//           ‹
//         </button>
//       )}
//       <span className="top-bar__title">{title}</span>
//     </div>
//   );
// }

// import { useNavigate } from 'react-router-dom';

// export default function TopBar({ title, showBack = false }) {
//   const navigate = useNavigate();
//   return (
//     <div className="sticky top-0 w-full h-12 flex items-center px-4 bg-white border-b border-gray-100 z-50">
//       {showBack && (
//         <button
//           className="bg-none border-none text-2xl text-gray-800 cursor-pointer mr-2"
//           onClick={() => navigate(-1)}
//         >
//           ‹
//         </button>
//       )}
//       <span className="text-lg font-bold text-gray-900">{title}</span>
//     </div>
//   );
// }

import { useNavigate } from 'react-router-dom';

export default function TopBar({ title, showBack = false }) {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 w-full h-12 flex items-center px-4 bg-white border-b border-gray-100 z-50">
      {showBack && (
        <button
          className="text-3xl text-gray-800 cursor-pointer mr-2 border-none bg-transparent"
          onClick={() => navigate(-1)}
        >
          ‹
        </button>
      )}
      <span className="text-lg font-bold text-gray-900">{title}</span>
    </div>
  );
}