const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer className='text-center text-capitalize mt-5'>
        copyright Sons of Pitches &copy; {year}
      </footer>
    </>
  )
}

export default Footer