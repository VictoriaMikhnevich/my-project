import React, { useState } from 'react';
// import styles from './Catalog.module.scss';
import CatalogItem from '../CatalogItem/CatalogItem';
import './Catalog.scss';

const  MATERIAL = {
  STEEL: 'steel',
  CERAMIC: "ceramic",
  MARBLE: "marble",

}
const BRANDS = {
  TEFAL: 'Tefal',
  BRISOL: 'Brisol',
  ARDESTO: 'Ardesto'
}

const SHAPES = {
  CIRCLE: 'Circle',
  SQUARE: 'Square',
  TRIANGLE: 'Triangle'
}

const Catalog = () => {
  const [material, setMaterial] = useState([]);
  const [brand, setBrand] = useState([]);
  const [shape, setShape] = useState([]);

  const productList = [
    {
      "id": 1,
      "name": "pan Tefal",
      "material": "steel",
      "price": 200,
      "brand": "Tefal",
      "shape": "Circle"
    },
    {
      "id": 2,
      "name": "pan Brisol",
      "material": "ceramic",
      "price": 150,
      "brand": "Brisol",
      "shape": "Square"
    },
    {
      "id": 3,
      "name": "pan Ardesto",
      "material": "marble",
      "price": 350,
      "brand": "Ardesto",
      "shape": "Triangle"
    }
  ];

  const handleFilterByMaterial= (event) => {
    const { value } = event.target
    if (material.includes(value)) {
      return setBrand(material.filter((_material) => _material !== value))
    }
    setBrand([...material, value])
  }
  const handleFilterByBrand = (event) => {
    const { value } = event.target
    if (brand.includes(value)) {
      return setBrand(brand.filter((_brand) => _brand !== value))
    }
    setBrand([...brand, value])
  }

   const handleFilterByShape = (event) => {
    const { value } = event.target
    if (shape.includes(value)) {
      return setShape(shape.filter((_shape) => _shape !== value))
    }
    setShape([...shape, value])
  }

  const products = () => {
    const withFilterByMaterial = material.length > 0 ? productList.filter((product) => material.includes(product.material)) : productList
    const withFilterByBrand = brand.length > 0 ? productList.filter((product) => brand.includes(product.brand)) : productList
    const withFilterByShape = shape.length > 0 ? withFilterByBrand.filter((product) => shape.includes(product.shape)) : withFilterByBrand
    return withFilterByShape
  }

  return (<div className='Catalog'>
    <div class="album py-5">
      <div class="container flex justify-between space-x-5">
        <div className='filter w-40 h-full text-left'>
          <div class="text-xl">Filters</div>
          <div>
            <div class="text-xl">Brands:</div>
            <div>
              <div>
              <input id={BRANDS.TEFAL} type="checkbox" checked={brand.includes(BRANDS.TEFAL)} value={BRANDS.TEFAL} onChange={handleFilterByBrand} />
              <label htmlFor={BRANDS.TEFAL}>{BRANDS.TEFAL}</label>
            </div>
            <div>
              <input id={BRANDS.BRISOL} type="checkbox" checked={brand.includes(BRANDS.BRISOL)} value={BRANDS.BRISOL} onChange={handleFilterByBrand} />
              <label htmlFor={BRANDS.BRISOL}>{BRANDS.BRISOL}</label>
            </div>
            <div>
              <input id={BRANDS.ARDESTO} type="checkbox" checked={brand.includes(BRANDS.ARDESTO)} value={BRANDS.ARDESTO} onChange={handleFilterByBrand} />
              <label htmlFor={BRANDS.ARDESTO}>{BRANDS.ARDESTO}</label>
            </div>
            </div>
          </div>
          <div>
            <div class="text-xl">Forms:</div>
            <div>
              <div>
              <input id={SHAPES.CIRCLE} type="checkbox" checked={shape.includes(SHAPES.CIRCLE)} value={SHAPES.CIRCLE} onChange={handleFilterByShape} />
              <label htmlFor={SHAPES.CIRCLE}>{SHAPES.CIRCLE}</label>
            </div>
            <div>
              <input id={SHAPES.SQUARE} type="checkbox" checked={shape.includes(SHAPES.SQUARE)} value={SHAPES.SQUARE} onChange={handleFilterByShape} />
              <label htmlFor={SHAPES.SQUARE}>{SHAPES.SQUARE}</label>
            </div>
            <div>
              <input id={SHAPES.TRIANGLE} type="checkbox" checked={shape.includes(SHAPES.TRIANGLE)} value={SHAPES.TRIANGLE} onChange={handleFilterByShape} />
              <label htmlFor={SHAPES.TRIANGLE}>{SHAPES.TRIANGLE}</label>
            </div>
            </div>
          </div>
          <div class="text-xl">Material:</div>
          <div>
            <div>
            <input id={MATERIAL.STEEL} type="checkbox" checked={material.includes(MATERIAL.STEEL)} value={MATERIAL.STEEL} onChange={handleFilterByMaterial} />
            <label htmlFor={MATERIAL.STEEL}>{MATERIAL.STEEL}</label>
          </div>
          <div>
            <input id={MATERIAL.CERAMIC} type="checkbox" checked={material.includes(MATERIAL.CERAMIC)} value={MATERIAL.CERAMIC} onChange={handleFilterByMaterial} />
            <label htmlFor={MATERIAL.CERAMIC}>{MATERIAL.CERAMIC}</label>
          </div>
          <div>
            <input id={MATERIAL.MARBLE} type="checkbox" checked={material.includes(MATERIAL.MARBLE)} value={MATERIAL.MARBLE} onChange={handleFilterByMaterial} />
            <label htmlFor={MATERIAL.MARBLE}>{MATERIAL.MARBLE}</label>
          </div>
          </div>
        </div>
        <div>
        </div>
        <div class="w-full h-full row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            {
              products().map(item => {
                return (
                  <div class="col" key={item.id}>
                    <CatalogItem name={item.name}
                      material={item.material}
                      brand={item.brand}
                      price={item.price}
                       />
                    </div>)
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
};

Catalog.propTypes = {};

Catalog.defaultProps = {};

export default Catalog;
