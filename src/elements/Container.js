import styled from 'styled-components'

const Container = styled.div`
  width: ${props => props.width || '100%'};
  max-width: ${props => props.maxWidth || 'auto'};
  height: ${props => props.height || 'auto'};
  margin-top: ${props => props.marginTop || null};
  margin-left: ${props => props.marginleft || null};
  padding-top: ${props => props.paddingTop || null};
  padding-bottom: ${props => props.paddingBottom || null};

  background-color: ${props => props.backgroundColor || null};
  overflow: ${props => props.overFlow || null};

  display: ${props => props.display || 'flex'};
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-content: flex-start;
  align-items: ${props => props.alignItems || 'flex-start'};
  flex-grow: 1;
  flex-shrink: 2;
  flex-wrap: ${props => props.flexWrap || 'wrap'}; // -reverse;
`

export default Container
