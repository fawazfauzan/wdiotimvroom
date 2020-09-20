class SeleniumPage{

    get inputAnswer1() {return $(`//input[@id='answer1']`)}
    get inputName() {return $(`//input[@id='name']`)}
    get selectOccupation() {return $(`//select[@id='occupation']`)}
    get spanBlueBox() {return $$(`//span[@class='bluebox']`)}
    get inputAnswer4() {return $(`//input[@id='answer4']`)}
    get linkClickMe() {return $(`//a[contains(text(),'click me')]`)}
    get spanRedBox() {return $(`//span[@id='redbox']`)}
    get inputAsnwer6() {return $(`//input[@id='answer6']`)}
    get inputAnswer8() {return $(`//input[@id='answer8']`)}
    get inputWroteBook() {return $(`//input[@value='wrotebook']`)}
    get inputAnswer10() {return $(`//input[@id='answer10']`)}
    get boxOnTop() {return $(`//h3[contains(text(),'Boxes to check arrangement of')]/following::span[1]`)}
    get spanOrangeBox() {return $(`//span[@id='orangebox']`)}
    get inputAnswer11() {return $(`//input[@id='answer11']`)}
    get inputAnswer13() {return $(`//input[@id='answer13']`)}
    get itemIsHere() {return $('#ishere')}
    get inputAnswer14() {return $(`//input[@id='answer14']`)}
    get spanPurpleBox() {return $(`#purplebox`)}
    get linkClickWait() {return $(`//a[contains(text(),'${this.textLink}')]`)}
    get btnSubmit() {return $(`//input[@id='submitbutton']`)}
    get btnCheckResults() {return $(`//input[@id='checkresults']`)}

    get spanResult1() {return $(`//span[@id='ok_1']`)}
    get spanResult2() {return $(`//span[@id='ok_2']`)}
    get spanResult3() {return $(`//span[@id='ok_3']`)}
    get spanResult4() {return $(`//span[@id='ok_4']`)}
    get spanResult5() {return $(`//span[@id='ok_5']`)}
    get spanResult6() {return $(`//span[@id='ok_6']`)}
    get spanResult7() {return $(`//span[@id='ok_7']`)}
    get spanResult8() {return $(`//span[@id='ok_8']`)}
    get spanResult9() {return $(`//span[@id='ok_9']`)}
    get spanResult10() {return $(`//span[@id='ok_10']`)}
    get spanResult11() {return $(`//span[@id='ok_11']`)}
    get spanResult12() {return $(`//span[@id='ok_12']`)}
    get spanResult13() {return $(`//span[@id='ok_13']`)}
    get spanResult14() {return $(`//span[@id='ok_14']`)}
    get spanResult15() {return $(`//span[@id='ok_15']`)}
    get spanResult16() {return $(`//span[@id='ok_16']`)}
    get spanResult17() {return $(`//span[@id='ok_17']`)}


    openPage(url)
    {
        browser.url(url);
        browser.maximizeWindow();
    }

    fillNameSection(value){
        this.inputName.setValue(value)
    }

    selectedOccupation(occupation){
        this.selectOccupation.selectByAttribute('value',occupation.toString().toLowerCase())
    }

    countElement(element)
    {
        return element.length;
    }

    getClassAttribute(element)
    {
        return element.getAttribute('class')
    }

    getTextBoxOnTop(){
        let text = this.boxOnTop.getText();
        return (text=='orange Box') ? 'orange':'green';
    }

    getItemIsHereYesorNo()
    {
        return (this.itemIsHere.isExisting()) ? 'yes':'no';
    }

    getItemPurpleBoxVisibleYesorNo()
    {
        return (this.spanPurpleBox.isDisplayed()) ? 'yes':'no';
    }

    clickLink(text)
    {
        this.textLink = text;
        this.linkClickWait.waitForDisplayed({timeout:11000})
        this.linkClickWait.click();
    }

    verifyTaskNo1isOK(result){
        expect(this.spanResult1).toHaveText(result)
    }
    verifyTaskNo2isOK(result){
        expect(this.spanResult2).toHaveText(result)
    }
    verifyTaskNo3isOK(result){
        expect(this.spanResult3).toHaveText(result)
    }
    verifyTaskNo4isOK(result){
        expect(this.spanResult4).toHaveText(result)
    }
    verifyTaskNo5isOK(result){
        expect(this.spanResult5).toHaveText(result)
    }
    verifyTaskNo6isOK(result){
        expect(this.spanResult6).toHaveText(result)
    }
    verifyTaskNo7isOK(result){
        expect(this.spanResult7).toHaveText(result)
    }
    verifyTaskNo8isOK(result){
        expect(this.spanResult8).toHaveText(result)
    }
    verifyTaskNo9isOK(result){
        expect(this.spanResult9).toHaveText(result)
    }
    verifyTaskNo10isOK(result){
        expect(this.spanResult10).toHaveText(result)
    }
    verifyTaskNo11isOK(result){
        expect(this.spanResult11).toHaveText(result)
    }
    verifyTaskNo12isOK(result){
        expect(this.spanResult12).toHaveText(result)
    }
    verifyTaskNo13isOK(result){
        expect(this.spanResult13).toHaveText(result)
    }
    verifyTaskNo14isOK(result){
        expect(this.spanResult14).toHaveText(result)
    }
    verifyTaskNo15isOK(result){
        expect(this.spanResult15).toHaveText(result)
    }
    verifyTaskNo16isOK(result){
        expect(this.spanResult16).toHaveText(result)
    }
    verifyTaskNo17isOK(result){
        expect(this.spanResult17).toHaveText(result)
    }

    fillAnswerBox1(answer){
        this.inputAnswer1.setValue(answer)
    }

    fillAnswerBox4(answer){
        this.inputAnswer4.setValue(answer)
    }

    fillAnswerBox6(answer){
        this.inputAsnwer6.setValue(answer)
    }

    fillAnswerBox8(answer){
        this.inputAnswer8.setValue(answer)
    }

    fillAnswerBox10(answer){
        this.inputAnswer10.setValue(answer)
    }

    fillAnswerBox11(answer){
        this.inputAnswer11.setValue(answer)
    }

    
    fillAnswerBox13(answer){
        this.inputAnswer13.setValue(answer)
    }

    
    fillAnswerBox14(answer){
        this.inputAnswer14.setValue(answer)
    }


}

module.exports = new SeleniumPage;