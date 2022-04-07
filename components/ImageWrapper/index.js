export const ImageWrapper = ({ children }) => {
  return (
    <>
      <figure>
        {children}
      </figure>

      <style jsx>
        {`
          figure {
            display: flex;
            border-radius: 100%;
            overflow: hidden;
          }  
        `}
      </style>
    </>
  )
}
