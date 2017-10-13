describe('FHL homepage split test', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);
  });

  it('Compare home loan with valid input', function () {
    // Tags: key:Field Parameters
    // Given I entered borrowing amount and period
    this.actionwords.iEnteredBorrowingAmountAndPeriod();
    // And click on Compare home loans button
    this.actionwords.clickOnCompareHomeLoansButton();
    // Then then page should scroll to table below
    this.actionwords.thenPageShouldScrollToTableBelow();
  });

  describe('Compare home loan with a negative value', function () {
    function compareHomeLoanWithANegativeValue (value) {
      // Tags: key:Field Parameters
      // Given I entered negative borrowing amount
      this.actionwords.iEnteredNegativeBorrowingAmount("||");
      // And click on Compare home loans button
      this.actionwords.clickOnCompareHomeLoansButton();
      // Then then page should not scroll to table below
      this.actionwords.thenPageShouldNotScrollToTableBelow();
      // And should show validation error message for amount field
      this.actionwords.shouldShowValidationErrorMessageForAmountField();
    }

    it('Amount', function () {
      compareHomeLoanWithANegativeValue.apply(this, [-50000]);
    });

    it('Period(Years)', function () {
      compareHomeLoanWithANegativeValue.apply(this, [25]);
    });
  });


  it('Compare home loan with a invalid value', function () {
    // Tags: key:Field Parameters
    // Given I entered invalid borrowing amount
    this.actionwords.iEnteredInvalidBorrowingAmount();
    // And click on Compare home loans button
    this.actionwords.clickOnCompareHomeLoansButton();
    // Then then page should not scroll to table below
    this.actionwords.thenPageShouldNotScrollToTableBelow();
    // And should show validation error message for amount field
    this.actionwords.shouldShowValidationErrorMessageForAmountField();
  });

  it('Pre fill inputs	in table calculator', function () {
    // Tags: key:Field Parameters
    // Given I entered borrowing amount and period
    this.actionwords.iEnteredBorrowingAmountAndPeriod();
    // And click on Compare home loans button
    this.actionwords.clickOnCompareHomeLoansButton();
    // Then table calculator fields should pre fill with the same values I entered in header calculator widget
    this.actionwords.tableCalculatorFieldsShouldPreFillWithTheSameValuesIEnteredInHeaderCalculatorWidget();
  });

  it('FIN HP pre fill inputs', function () {
    // Tags: key:Field Parameters
    // Given I enter input in FIN homepage home loan calculator
    this.actionwords.iEnterInputInFINHomepageHomeLoanCalculator();
    // And I click on get started button
    this.actionwords.iClickOnGetStartedButton();
    // Then FHL homepage calculator widget should pre-fill same values that are entered in FIN homepage home loan calculator
    this.actionwords.fHLHomepageCalculatorWidgetShouldPrefillSameValuesThatAreEnteredInFINHomepageHomeLoanCalculator();
  });

  it('Clear calculator inputs in page refresh', function () {
    // Tags: key:Page element
    // Given FHL homepage is refreshed
    this.actionwords.fHLHomepageIsRefreshed();
    // Then Previously entered value must clear from header calculator widget and table at the bottom
    this.actionwords.previouslyEnteredValueMustClearFromHeaderCalculatorWidgetAndTableAtTheBottom();
  });

  it('Display provider logo bar', function () {
    // Tags: key:Page element
    // Given I open FHL home page
    this.actionwords.iOpenFHLHomePage();
    // Then provider logo bar should display containing all providers
    this.actionwords.providerLogoBarShouldDisplayContainingAllProviders();
  });

  it('Provider logo bar scroll', function () {
    // Tags: key:Page element
    // Given number of provider logos is increased in logo bar
    this.actionwords.numberOfProviderLogosIsIncreasedInLogoBar();
    // Then scroll bar should automatically appear on logo bar
    this.actionwords.scrollBarShouldAutomaticallyAppearOnLogoBar();
  });

  it('Home loan guide video', function () {
    // Tags: key:Page element
    // Given I click on play button of Home loan guide video
    this.actionwords.iClickOnPlayButtonOfHomeLoanGuideVideo();
    // Then video should play on a pop up modal
    this.actionwords.videoShouldPlayOnAPopUpModal();
  });

  it('Cross device compatibility', function () {
    // Tags: key:Responsive
    // Given I open home page on mobile
    this.actionwords.iOpenHomePageOnMobile();
    // Then all page elements should function as expected
    this.actionwords.allPageElementsShouldFunctionAsExpected();
  });

  it('Cross browser compatibility', function () {
    // Tags: key:Responsive
    // Given I open home page on different browser
    this.actionwords.iOpenHomePageOnDifferentBrowser();
    // Then all page elements should function as expected in all browsers
    this.actionwords.allPageElementsShouldFunctionAsExpectedInAllBrowsers();
  });
});
