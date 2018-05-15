import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container, ImgFrame, ImgGrid, TableGrid, ButtonGrid } from './SizeCompStyles'
import TableComp from './components/table/TableComp';
import ButtonComp from './components/button/ButtonComp';
import SizeFinderComp from './components/findersize/SizeFinderComp';


function importAll(r) { // @importAll Dynamic Import image
let images = {};
r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
return images;
}

@inject('ProductStore')
@observer
export default class SizeComp extends Component {
  constructor() {
    super();
    this.displaySize = this.displaySize.bind(this);
  }

  displaySize() {
    const { displayProductSize } = this.props.ProductStore;
    displayProductSize();
  }

  render() {
    const images = importAll(require.context('../../../assets/img/', false, /\.(png|jpe?g|svg)$/));
    const { sizeComponent } = this.props.ProductStore;

    return (
    <Container>
      <ImgGrid>
        <ImgFrame src={images[sizeComponent.imgObject.imgSrc]} alt={sizeComponent.imgObject.imgAlt} />
      </ImgGrid>
      <TableGrid>
        <TableComp arrayObject={sizeComponent.geometryObject} headerProps={sizeComponent.headerTitle}/>
      </TableGrid>
			<ButtonGrid>
			{ sizeComponent.displaySize ? null : < ButtonComp propsText = {sizeComponent.buttonText} onClick = {this.displaySize} /> }
      { sizeComponent.displaySize ? <SizeFinderComp /> : null }
      </ButtonGrid>
    </Container>
    )
  }
}