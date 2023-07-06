import { Stack } from '@mui/material'

import { categories } from '../utils/constants'



const Sidebar = ({ setSelectedCategory, selectedCategory }) => (

    <Stack className='bi__sidebar'
        direction="row"
        sx={{
            overflowY: 'auto',
            height: { sm: 'auto', md: '95%' },
            flexWrap: 'wrap',
        }}>

        {categories.map((category) => (
            <button
                className='category-btn'
                onClick={() => setSelectedCategory(category.name)}
                style={{
                    background: category.name === selectedCategory && '#FC1503',
                    width: '100%',
                    color: '#FFF'
                }}
                key={category.name}
            >
                <span style={{
                    color: category.name === selectedCategory ? 'White' : 'Red',
                    marginRight: '10px'
                }}>{category.icon}</span>
                <span style={{ opacity: category.name === selectedCategory ? '1' : '.7' }}>{category.name}</span>
            </button>
        ))}
    </Stack>

)

export default Sidebar