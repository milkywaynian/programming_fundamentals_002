const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooks", () => {
    test("returns the number of books in the list", () => {
      expect(catalogueService.countBooks()).toBe(20);
    });
  });

  describe("catalogueService.checkBook", () => {
    test("returns true if the book exists in the list", () => {
      expect(catalogueService.checkBook("Dracula by Bram Stoker")).toBe(true);
    });
    
    test("returns false if the book exists in the list", () => {
      expect(catalogueService.checkBook("Moths by Pamela Mothman")).toBe(false);
    });
});

describe("catalogueService.countBooksByFirstLetter", () => {
  test("returns the number of books beginning with the given letter", () => {
    expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
  });

  test("returns 0 if no books begin with the given letter", () => {
    expect(catalogueService.countBooksByFirstLetter("X")).toBe(0);
  });
});

describe("countBooksByKeyword", () => {
  test("returns the number of books that match a given keyword", () => {
    expect(catalogueService.countBooksByKeyword("assassin")).toBe(3);
  });

  test("returns 0 if no books match a given keyword", () => {
    expect(catalogueService.countBooksByKeyword("pineapple")).toBe(0);
  });
});

describe("getBooksByAuthor", () => {
  test("provides a list of books by a given author", () => {
    expect(catalogueService.getBooksByAuthor("Charles Dickens")).toEqual([
      "A Tale of Two Cities by Charles Dickens",
      "Oliver Twist by Charles Dickens",
      "Great Expectations by Charles Dickens"])
    });
  test("writes an empty array when no author is matched", () => {
    expect(catalogueService.getBooksByAuthor("Elizabeth Gilbert")).toEqual([]);
  });
});
});