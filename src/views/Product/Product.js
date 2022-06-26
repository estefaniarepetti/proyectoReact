import React from "react"
import Navbar from "../../components/Navbar/Navbar"
import { useParams } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer"
import Footer from "../../components/Footer/Footer"

export default function Product () {
  const {productoId} = useParams()
  return(
    <> 
      <Navbar /> 
      <h1>Producto seleccionado</h1>
    <Container>
      <Row>
        <Col>
          <ItemDetailContainer title="Mi producto" productoId={productoId}/>

        </Col>
      </Row>
    </Container>  

    <Footer/> 
    </>
  )
}
