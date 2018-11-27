class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <ul className="menulist">
          <li><a href="#">USERS</a></li>
          <li><a href="#">LINKS</a></li>
          <li><a href="#">COLLECTIONS</a></li>
        </ul>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>MY POCKET</h1>
        <Menu />
      </div>
    )
  }
}

class Sidemenu extends React.Component {
  render() {
    return (
      <div className="sidemenu">
        <ul className="sidemenulist">
        <li><a href="#">USERS</a></li>
        <li><a href="#">LINKS</a></li>
        <li><a href="#">COLLECTIONS</a></li>
        </ul>
      </div>
    );
  }
}

class User extends React.Component {
  render() {
    return (
      <ul className='biglist'>
        <li>id : {this.props.id}</li>
        <li>nickname : {this.props.nickname}</li>
        <li>mail : {this.props.mail}</li>
      </ul>
    );
  }
}

class Tag extends React.Component {
  render() {
    return (
      <li> {this.props.tagname}</li>
    );
  }
}

class Link extends React.Component {
  createTagsList() {
    const tags = ['Videos','Information','Article','Books','Movies'];

    const tagsList = tags.map( (t) => <Tag key={t} tagname={t} /> );
    return tagsList;
  }

  render() {
    const list = this.createTagsList();
    return (
      <ul className='biglist'>
        <li>id : {this.props.id}</li>
        <li>url : {this.props.url}</li>
        <li>tags :
          <ul>{list}</ul>
        </li>
      </ul>
    )
  }
}

class Collection extends React.Component {
  createLinksList() {
    const links = [
          {id:'1',url:'youtube.com'},
          {id:'2',url:'google.com'},
          {id:'3',url:'facebook.com'}, ];
    const linksList = links.map( (l)=>{
      return <li key={l.id}><Link id={l.id} url={l.url} /></li>;
    });

    return linksList;
  }

  render() {
    const list = this.createLinksList();
    return (
      <ul className='biglist'>{list}</ul>
    );
  }

}

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <div className="content">
          <div className="leftcol">
            <Sidemenu />
          </div>
          <div className="rightcol">
            <div className='section users'>
              <h2>All Users</h2>
              <hr /><br/>
              <User id='1' nickname="Jacquard Le Gueux" mail='jacquard@lvstr.com' />
              <User id='2' nickname="Dame Ginette" mail='dg@lvstr.com' />
              <User id='3' nickname="Cousin Hub'" mail='hubofmontmirail@lvstr.com' />
              <User id='4' nickname="Dame Béatrice" mail='beaofmontrailmi@lvstr.com' />
              <User id='5' nickname="Jean-Pierre" mail='jplegueux@bg.com' />
            </div>
            <br/>
            <div className='section links'>
              <h2>All Links</h2>
              <hr /><br/>
              <Link id='1' url='youtube.com'/>
              <Link id='2' url='google.com'/>
              <Link id='3' url='facebook.com'/>
              <Link id='4' url='slack.com'/>
              <Link id='5' url='react.com'/>
            </div>
            <br/>
            <div className='section collections'>
              <h2>All Collections</h2>
              <hr /><br/>
              <Collection id='1'/>
              <br/>
              <Collection id='2'/>
              <br/>
              <Collection id='3'/>
              <br/>
            </div>
          </div>
        </div>
      <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('root'));
