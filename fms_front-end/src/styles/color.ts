

export type ColorType = 
    | 'delete'
    | 'cancel'
    | 'cancelH'
    | 'grn1'
    | 'grn1H'
    | 'grn1H2'
    | 'gr1'
    | 'gr2'
    | 'gr3'
    | 'gr4'
    | 'gr5'
    
    | 'modalBack'
    | 'black'
    | 'white'


const colorSet = {
    delete : '#ff0000',
    cancel: '#8f3737',
    cancelH : '#bd2424',
    grn1 : '#518071',
    grn1H : '#5180712e',
    grn1H2 : '#2a9472',

    gr1 : '#f3f3f3',
    gr2 : '#d3d3d3',
    gr3 : '#929292',
    gr4 : '#606060',
    gr5 : '#444444',

    modalBack : '#00000046',
    black : '#000000',
    white:'#ffffff'
}

export default colorSet;