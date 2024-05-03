import RestaurantIcon from '@mui/icons-material/Restaurant';
import FastfoodIcon from '@mui/icons-material/Fastfood';

const Tabs = () => {
  return (
    <div className='tabs'>
      <hr style={{ backgroundColor: "#F0EEE4", height: '.1px', border: 'none' }} />
      <div className='tabs-container'>
        <div className="tab tab-active">
          <RestaurantIcon />
          <p>Restaurants</p>
        </div>
        <div className="tab">
          <FastfoodIcon />
          <p>Grocery</p>
        </div>
      </div>
      <hr style={{ backgroundColor: "#F0EEE4", height: '.1px', border: 'none' }} />
    </div>
  )
}

export default Tabs
