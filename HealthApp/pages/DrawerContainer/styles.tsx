import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    page_wrap: {
      overflow: 'visible',
      top: '45%',
      position: 'relative',
    },

    bm_item: {
      //display: 'inline_block',
      /* Our sidebar item styling */
      //text_decoration: 'none',
      //margin_bottom: '10px',
      color: '#d1d1d1',
      //transition: 'color 0.2s',
    },

    bm_itemhover: {
      color: 'white',
    },

    bm_burger_button: {
      //position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '36px',
    },

    /* Color/shape of burger icon bars */
    bm_burger_bars: {
      //background: '#373a47',
    },

    /* Position and sizing of clickable cross button */
    bm_cross_button: {
      height: '24px',
      width: '24px',
    },

    /* Color/shape of close button cross */
    bm_cross: {
      //background: '#bdc3c7',
    },

    /* General sidebar styles */
    bm_menu: {
      //background: '#000',
      padding: '2.5em, 1.5em, 0',
      //font_size: '1.15em',
    },

    /* Morph shape necessary with bubble or elastic */
    bm_morph_shape: {
      //fill: '#373a47',
    },

    /* Wrapper for item list */
    bm_item_list: {
      color: '#b8b7ad',
    },

    /* Styling of overlay */
    bm_overlay: {
      //background: 'rgba(0, 0, 0, 0.3)',
    }
    
});

export default styles;