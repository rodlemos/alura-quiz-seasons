import Loading from '../Loading'
import Widget from '../Widget'

function LoadingWidget() {
    return (
      <Widget>
        <Widget.Header>
          Carregando...
        </Widget.Header>
  
        <Widget.Content>
          <Loading/>
        </Widget.Content>
      </Widget>
    );
}

export default LoadingWidget;
  