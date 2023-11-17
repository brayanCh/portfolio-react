
const PageContainer = props => {

    

  return (
    <div className={props.um ?'page hidden-pr' : 'page'}>
      {props.children}
    </div>
  );
};


export default PageContainer;
