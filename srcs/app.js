  const menus = [
                  {id: 1, name: 'USERS', icon:'./public/img/icon1.png'},
                  {id: 2, name: 'LINKS', icon:'./public/img/icon2.png'},
                  {id: 3, name: 'COLLECTIONS', icon:'./public/img/icon3.png'},
                ];

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



class Container extends React.Component {
  render() {
    return (
      <div id='container' className='container'>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

  class Header extends React.Component {
    render() {
      return (
        <div className="header">
          <h1>MY POCKET</h1>
          <Headmenu />
        </div>
      )
    }
  }

  class Headmenu extends React.Component {
    render() {
      return (
        <div className="headmenu">
          <ul className="headmenulist">
            <li><a href="#">USERS</a></li>
            <li><a href="#">LINKS</a></li>
            <li><a href="#">COLLECTIONS</a></li>
          </ul>
        </div>
      );
    }
  }

  class Content extends React.Component {
    constructor(props) {
      super(props);
      this.getLeftColToggles = this.getLeftColToggles.bind(this);
      this.state = {
                      displayToggles:  {
                        hideusers : false,
                        hidelinks : true,
                        hidecollections : true
                      }
                    };
    }

    getLeftColToggles(childToggles) {
      this.setState({ displayToggles : childToggles })
    }


    render() {
      return (
        <div className="content">
          <LeftCol toggles={this.getLeftColToggles}/>
          <RightCol toShow={this.state.displayToggles} />
        </div>
      );
    }
  }


    class LeftCol extends React.Component {
      constructor(props) {
        super(props);
        this.getSideMenuToggles = this.getSideMenuToggles.bind(this);
      }

      getSideMenuToggles(childToggles) {
        this.props.toggles(childToggles);  //Then sending the toggles to <Content />
      }

      render() {
        return (
          <div className="leftcol">
            <Sidemenu menus={menus} toggles={this.getSideMenuToggles}/>
          </div>
        )
      }
    }

      class Sidemenu extends React.Component {
        constructor(props) {
          super(props);
          this.getMenuToggles = this.getMenuToggles.bind(this);
        }

        getMenuToggles(childToggles) {
          this.props.toggles(childToggles);  //Then sending the toggles to <LeftCol />
        }

        render() {
          const listMenus = this.props.menus.map(m=><Menu toggles={this.getMenuToggles} key={m.id} name={m.name} icon={m.icon} /> );

          return (
            <div className="sidemenu">
              <ul className="sidemenulist">
                {listMenus}
              </ul>
            </div>
          );
        }
      }

      class Menu extends React.Component {
        constructor(props) {
          super(props);
          this.setToggles = this.setToggles.bind(this);
        }

        setToggles(e) {
          e.preventDefault();
          const target = e.target.innerText.toLowerCase(); //get clicked menu
          let displayToggles = {};
          if (target==="users") {
            displayToggles = { hideusers : false, hidelinks : true, hidecollections : true };
          } else if (target==="links") {
            displayToggles = { hideusers : true, hidelinks : false, hidecollections : true };
          } else if (target==="collections") {
            displayToggles = { hideusers : true, hidelinks : true, hidecollections : false };
          }
          this.props.toggles(displayToggles);    // Sending toggles to <SideMenu />
        }

        render() {
          return (
            <li><a href="#" onClick={this.setToggles} className="singlemenu">
                <span className="leftmenupart">
                  <img width="30" src={this.props.icon}/>
                </span>
                <span className="rightmenupart">
                  {this.props.name}
                </span>
            </a></li>

          );
        }
      }

    class RightCol extends React.Component {
      render() {
        return (
          <div className="rightcol">
            <AllUsers hide={this.props.toShow.hideusers}/>
            <AllLinks hide={this.props.toShow.hidelinks}/>
            <AllCollections hide={this.props.toShow.hidecollections}/>
          </div>
        )
      }
    }

      class AllUsers extends React.Component {
        render() {
          return (
            <div className='section users' hidden={this.props.hide}>
              <h2>All Users</h2>
              <User id='1' nickname="Jacquard Le Gueux" mail='jacquard@lvstr.com' />
              <User id='2' nickname="Dame Ginette" mail='dg@lvstr.com' />
              <User id='3' nickname="Cousin Hub'" mail='hubofmontmirail@lvstr.com' />
              <User id='4' nickname="Dame Béatrice" mail='beaofmontrailmi@lvstr.com' />
              <User id='5' nickname="Jean-Pierre" mail='jplegueux@bg.com' />
            </div>
          )
        }
      }

      class AllLinks extends React.Component {
        render() {
          return (
            <div className='section links' hidden={this.props.hide}>
              <h2>All Links</h2>
              <Link id='1' url='youtube.com'/>
              <Link id='2' url='google.com'/>
              <Link id='3' url='facebook.com'/>
              <Link id='4' url='slack.com'/>
              <Link id='5' url='react.com'/>
            </div>
          )
        }
      }

      class AllCollections extends React.Component {
        render() {
          return (
            <div className='section collections' hidden={this.props.hide}>
              <h2>All Collections</h2>
              <Collection id='1'/>
              <Collection id='2'/>
              <Collection id='3'/>
            </div>
          )
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
      <Container />
    );
  }
}

ReactDOM.render(<App />,document.getElementById('root'));
