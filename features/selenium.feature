Feature: Selenium Testing Task

Background: User already on selenium page
Given User on Selenium Page

    Scenario: Ensure Task #1 is OK
    When User fill answer box #1
    And User click check results
    Then Task #1 is "OK"

    Scenario: Ensure Task #2 is OK
    When User Fill out name section of form to be "Kilgore Trout"
    And User click check results
    Then Task #2 is "OK"

    Scenario: Ensure Task #3 is OK
    When User Set occupation on form to "Sci-Fi Author"
    And User click check results
    Then Task #3 is "OK"


    Scenario: Ensure Task #4 is OK
    When User Count number of blue_boxes on page after form and enter into answer box #4
    And User click check results
    Then Task #4 is "OK"
    
    Scenario: Ensure Task #5 is OK
    When User Click link that says "click me"
    And User click check results 
    Then Task #5 is "OK"

    Scenario: Ensure Task #6 is OK
    When User Find red box on its page find class applied to it, and enter into answer box #6
    And User click check results
    Then Task #6 is "OK"
    
    Scenario: Ensure Task #7 is OK
    When User Run JavaScript function as: "ran_this_js_function()" from your Selenium script
    And User click check results
    Then Task #7 is "OK"
    
    Scenario: Ensure Task #8 is OK
    When User Run JavaScript function as: "got_return_from_js_function()" from your Selenium script, take returned value and place it in answer slot #8
    And User click check results
    Then Task #8 is "OK"

    Scenario: Ensure Task #9 is OK
    When User Mark radio button on form for written book? to Yes
    And User click check results
    Then Task #9 is "OK"

    Scenario: Ensure Task #10 is OK
    When User Get the text from the Red Box and place it in answer slot #10
    And User click check results
    And Task #10 is "OK"

    Scenario: Ensure Task #11 is OK
    When User Which box is on top orange or green place correct color in answer slot #11
    And User click check results
    Then Task #11 is "OK"

    Scenario: Ensure Taks #12 is OK
    When User set browser width "850" and height "650"
    And User click check results
    Then Task #12 is "OK"

    Scenario: Ensure Task #13 is OK
    When User Type into answer slot 13 yes or no depending on whether item by id of ishere is on the page
    And User click check results
    Then Task #13 is "OK"

    Scenario: Ensure Task #14 is OK
    When User Type into answer slot 14 yes or no depending on whether item with id of purplebox is visible
    And User click check results
    Then Task #14 is "OK"

    Scenario: Ensure Task #15 & #16 is OK
    When User Waiting game: click the link with link text of "click then wait" a random wait will occur and then a new link will get added with link text of "click after wait" - click this new link within 500 ms of it appearing to pass this test
    And User Click OK on the confirm after completing task 15
    And User click check results
    Then Task #15 is "OK"
    And Task #16 is "OK"

    Scenario: Ensure Task #17 is OK
    When User Click the submit button on the form
    And User click check results
    Then Task #17 is "OK"
    