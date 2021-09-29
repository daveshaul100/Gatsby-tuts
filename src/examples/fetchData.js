//********************* */
// using graphiql
//********************** */
// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// const ComponentName = () => {
//   const data = useStaticQuery(graphql`
//     {
//       site {
//         siteMetadata {
//           author
//           description
//           simpleData
//           title
//           complexData {
//             age
//             name
//           }
//           person {
//             age
//             name
//           }
//         }
//       }
//     }
//   `)
//   return (
//     <div>
//       <h2>{data.site.siteMetadata.person.name}</h2>
//       <div>
//         {data.site.siteMetadata.complexData.map((item, index) => {
//           return (
//             <p key={index}>
//               {item.name} : {item.age}
//             </p>
//           )
//         })}
//       </div>
//     </div>
//   )
// }
// export default ComponentName

//******************** */
//written from scratch
//******************** */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`

const FetchData = () => {
  // Option1
  //   const data = useStaticQuery(getData)
  //   return (
  //     <div>
  //       <h2>Name : {data.site.siteMetadata.person.name}</h2>
  //     </div>
  //   )
  //option 2
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h2>site title is : {title}</h2>
    </div>
  )
}

export default FetchData

//if siteMetadata too long to write aliases can be used
// format - info: siteMetadata
//now info can be used to replace all instances
//of siteMetadata
