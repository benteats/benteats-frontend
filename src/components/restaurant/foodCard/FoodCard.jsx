import * as FoodCardStyle from './FoodCard.style'

export default function FoodCard() {
    return(
        <>
            <FoodCardStyle.FoodCardContainer>
                <FoodCardStyle.FoodCardContent>
                    <FoodCardStyle.FoodCardImage>
                        <img src="https://img.itdg.com.br/tdg/images/recipes/000/138/558/325115/325115_original.jpg?mode=crop&width=710&height=400"/>
                    </FoodCardStyle.FoodCardImage>

                    <FoodCardStyle.FoodCardData>
                        <span>
                            <h1>Lasagna Alla Bolognesa</h1>
                        </span>
                        <span>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aut culpa sed inventore maxime
                                maiores, ducimus delectus similique voluptatibus, possimus nulla. Quod, praesentium
                                exercitationem animi ipsa at nam iusto quas.</p>
                        </span>
                        <span>
                            <h2>R$ 25,00</h2>
                        </span>
                    </FoodCardStyle.FoodCardData>
                </FoodCardStyle.FoodCardContent>
            </FoodCardStyle.FoodCardContainer>
        </>
    )
}