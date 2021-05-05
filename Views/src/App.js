import { useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
//Components
import { CardContainer } from "./components/card-container/card-container";
import { SearchBox } from "./components/search-box/search-box";
import { AddBook } from "./components/add-book/add-book";
import { Switch, Route } from "react-router-dom";
import { BookDetails } from "./components/bookDetails/bookDetails";

function App() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Mount the Api data
  useEffect(() => {
    axios
      .get("http://127.0.0.1:4050/api/bookdir")
      .then((res) => setBooks(res.data.data))
      .catch((err) => console.log(err.message));
  }, [books]);

  // Prevent form default behavior
  const handleSubmit = (e) => e.preventDefault();
  //Search books
  const userQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = books.filter((book) =>
      book.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [books, searchQuery]);

  /////////////////////////////////////// CRUD Operations ||||||||||||||||||||||||||||||||||

  // Delete book
  const deleteBook = (id) => {
    axios
      .delete(`http://127.0.0.1:4050/api/bookdir/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  //Add books

  const [title, setTitle] = useState("");
  const userTitle = (e) => setTitle(e.target.value);
  const [author, setAuthor] = useState("");
  const userAuthor = (e) => setAuthor(e.target.value);
  const [genre, setGenre] = useState("");
  const userGenre = (e) => setGenre(e.target.value);
  const [desc, setDesc] = useState("");
  const userDesc = (e) => setDesc(e.target.value);
  const [year, setYear] = useState(0);
  const userYear = (e) => setYear(e.target.value);
  const [file, setFile] = useState(null);
  const setFileUploaded = (e) => setFile(e.target.files[0]);

  const addBook = () => {
    let formData = new FormData();
    formData.append("name", title);
    formData.append("author", author);
    formData.append("genre", genre);
    formData.append("year", year);
    formData.append("cover", file);
    axios
      .post("http://127.0.0.1:4050/api/bookdir", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  };

  //Get book details
  const getBookDetails = (id , setDetails) => {
    axios
    .get(`http://127.0.0.1:4050/api/bookdir/${id}`)
    .then((res) => {
      setDetails(res.data.data);
    })
    .catch((err) => console.log(err));
  } 

  // Update books
  const updateBook = id => {
    const userUpdate = { name : title, description : desc , author , genre , year}
    axios.patch(`http://127.0.0.1:4050/api/bookdir/${id}` , userUpdate ,{
      headers : {
        'content-type': 'application/json'
      }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <Switch>
      <Route path="/" exact>
        <SearchBox handleSubmit={handleSubmit} userQuery={userQuery} />
        <CardContainer
          filteredBooks={filteredBooks}
          deleteBook={deleteBook}
        />
        <AddBook
          handleSubmit={handleSubmit}
          userTitle={userTitle}
          userAuthor={userAuthor}
          userGenre={userGenre}
          userYear={userYear}
          addBook={addBook}
          setFileUploaded={setFileUploaded}
        />
      </Route>
      <Route path="/book/:id" render={ () => <BookDetails 
        getBookDetails={getBookDetails}
        handleSubmit = {handleSubmit}
        userTitle= {userTitle}
        userAuthor ={userAuthor}
        userGenre = {userGenre}
        userDesc = {userDesc}
        updateBook ={updateBook}
        userYear={userYear}
        
      />} />
    </Switch>
  );
}

export default App;
