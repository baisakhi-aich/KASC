// import React from 'react'
// import "./Youtube.css"

// import mock1 from '../../assets/OAS_RESULT_THUMBNAIL_BIKASH RANJAN SAHU[1].jpg';
// import mock2 from '../../assets/OAS_RESULT_THUMBNAIL_Clintan Sahu[1].jpg';
// import mock3 from '../../assets/OAS_RESULT_THUMBNAIL_DEBABRATA_GOUDA[1].jpg';
// import mock4 from '../../assets/OAS_RESULT_THUMBNAIL_EPSITA_PRIYADARSHINI[1].jpg';
// import mock5 from '../../assets/OAS_RESULT_THUMBNAIL_KAPIL_KUMAR_MOHANTY[1].jpg';
// import mock6 from '../../assets/OAS_RESULT_THUMBNAIL_Rashmiranjan Rout[1].jpg';
// import mock7 from '../../assets/OAS_RESULT_THUMBNAIL_Samudra Mishra[1].jpg';
// import mock8 from '../../assets/OAS_RESULT_THUMBNAIL_SIDDHANT_NAYAK[2].jpg';
// const Youtube = () => {
//   return (
//     <div className='utube-container'>
//       <h5>Mock Reviews </h5>
//       <div className='all-class'>
//       <div className='class1'>
//         <img src={mock1}></img>
//       <a href='https://youtu.be/hDGL8gYjHAI' >
//       <i class="bi bi-youtube"></i></a>
//       </div>
//       <div className='class2'>
//       <img src={mock2}></img>
//       <a href='https://youtu.be/5LSEcm14x6w'>
//       <i class="bi bi-youtube"></i></a>
//       </div>
//       <div className='class3'>
//       <img src={mock3}></img>
//       <a>
//       <i class="bi bi-youtube"></i></a>
//       </div>
//       <div className='class4'>
//       <img src={mock4}></img>
//       <a href='https://youtu.be/5LSEcm14x6w'>
//       <i class="bi bi-youtube"></i></a>
//       </div>
//       <div className='class5'>
//       <img src={mock5}></img>
//       <a href='https://youtu.be/oQ3rrvh1DzY'>
//       <i class="bi bi-youtube"></i></a>
//       </div>
//       <div className='class6'>
//       <img src={mock6}></img>
//       <a href="https://youtu.be/oQ3rrvh1DzY">
//       <i class="bi bi-youtube"></i></a>
//       </div>
//       <div className='class7'>
//       <img src={mock7}></img>
//       <a href='https://youtu.be/u15WqS1b2e0'>
//       <i class="bi bi-youtube"></i></a>
//       </div>
//       <div className='class8'>
//       <img src={mock8}></img>
//       <a href='https://youtu.be/m8F_0rWsptY'>
//       <i class="bi bi-youtube"></i></a>
//       </div>
//       </div>
//     </div>
//   )
// }

// export default Youtube
// import React from 'react';
// import './Youtube.css';
// import mock1 from '../../assets/OAS_RESULT_THUMBNAIL_BIKASH RANJAN SAHU[1].jpg';
// import mock2 from '../../assets/OAS_RESULT_THUMBNAIL_Clintan Sahu[1].jpg';
// import mock3 from '../../assets/OAS_RESULT_THUMBNAIL_DEBABRATA_GOUDA[1].jpg';
// import mock4 from '../../assets/OAS_RESULT_THUMBNAIL_EPSITA_PRIYADARSHINI[1].jpg';
// import mock5 from '../../assets/OAS_RESULT_THUMBNAIL_KAPIL_KUMAR_MOHANTY[1].jpg';
// import mock6 from '../../assets/OAS_RESULT_THUMBNAIL_Rashmiranjan Rout[1].jpg';
// import mock7 from '../../assets/OAS_RESULT_THUMBNAIL_Samudra Mishra[1].jpg';
// import mock8 from '../../assets/OAS_RESULT_THUMBNAIL_SIDDHANT_NAYAK[2].jpg';

// const Youtube = () => {
//   const photos = [mock1, mock2, mock3, mock4, mock5, mock6, mock7, mock8];

//   return (
//     <div className="youtube-container">
//       <h5>Mock Reviews</h5>
//       <div className="youtube-grid">
//         {photos.map((photo, index) => (
//           <div key={index} className="youtube-card">
//             <img src={photo} alt={`Mock ${index + 1}`} />
//             <a href="https://youtu.be/23-NEMX6Xh4" className="youtube-icon">
//               <i className="bi bi-youtube"></i>
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Youtube;
import React from 'react';
import './Youtube.css';

import mock1 from '../../assets/OAS_RESULT_THUMBNAIL_BIKASH RANJAN SAHU[1].jpg';
import mock2 from '../../assets/OAS_RESULT_THUMBNAIL_Clintan Sahu[1].jpg';
import mock3 from '../../assets/OAS_RESULT_THUMBNAIL_DEBABRATA_GOUDA[1].jpg';
import mock4 from '../../assets/OAS_RESULT_THUMBNAIL_EPSITA_PRIYADARSHINI[1].jpg';
import mock5 from '../../assets/OAS_RESULT_THUMBNAIL_KAPIL_KUMAR_MOHANTY[1].jpg';
import mock6 from '../../assets/OAS_RESULT_THUMBNAIL_Rashmiranjan Rout[1].jpg';
import mock7 from '../../assets/OAS_RESULT_THUMBNAIL_Samudra Mishra[1].jpg';
import mock8 from '../../assets/OAS_RESULT_THUMBNAIL_SIDDHANT_NAYAK[2].jpg';

const Youtube = () => {
  const mockData = [
    { img: mock1, link: 'https://youtu.be/hDGL8gYjHAI' },
    { img: mock2, link: 'https://youtu.be/5LSEcm14x6w' },
    { img: mock3, link: 'https://youtu.be/some-video-link' },
    { img: mock4, link: 'https://youtu.be/5LSEcm14x6w' },
    { img: mock5, link: 'https://youtu.be/oQ3rrvh1DzY' },
    { img: mock6, link: 'https://youtu.be/oQ3rrvh1DzY' },
    { img: mock7, link: 'https://youtu.be/u15WqS1b2e0' },
    { img: mock8, link: 'https://youtu.be/m8F_0rWsptY' },
  ];

  return (
    <div className="utube-container">
      <h5>Mock interview</h5>
      <div className="all-class">
        {mockData.map((item, index) => (
          <div className="thumbnail" key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.img} alt={`Thumbnail ${index + 1}`} />
              <div className="icon-overlay">
                <i className="bi bi-youtube"></i>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Youtube;






