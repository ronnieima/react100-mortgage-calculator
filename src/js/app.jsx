import React from "react/lib/React";
import NumberInput from "./components/NumberInput";
import TermSelect from "./components/TermSelect";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monthlyPayment: null,
    };

    this.handleCalculation = this.handleCalculation.bind(this)
  }

  handleCalculation(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const number = parseFloat(formData.get("balance"));
    const rate = parseFloat(formData.get("rate")) / 100;
    const term = parseFloat(formData.get("term"));

    const P = number;
    const r = rate / 12;
    const n = term * 12;

    const monthlyPayment =
      P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    this.setState({ monthlyPayment });
  };

  render() {
    return (
      <main className='bg-dark m-auto p-5' style={{height:"100svh"}}>
        <section className="container bg-light p-4 shadow-lg rounded align-middle ">

          <h3>Mortgage Calculator</h3>
        <form className="" onSubmit={this.handleCalculation}>
          <NumberInput
            label="Mortgage Loan Balance in US dollars"
            name="balance"
            type="number"
            />
          <NumberInput
            label="Annual Percentage Rate (APR)"
            name="rate"
            type="number"
            />
          <TermSelect />
          <div className='row justify-content-end px-5'>

            <button className='btn btn-primary row justify-content-end' type="submit" name="submit">Submit</button>
          </div>
        </form>
        <div id="output" name="output" className="row h2 d-flex justify-content-center">

        {this.state.monthlyPayment && (
          <p  >
              Monthly Payment: ${this.state.monthlyPayment.toFixed(2)}
          </p>
        )}
        </div>
        </section>
      </main>
    );
  }
}

export default App;

