import styled from "styled-components";

export default styled.div`
  .card {
    border-radius: 0.75rem;
    padding: 2rem;
    max-width: 75vw;
  }

  @media (max-width: 768px) {
    .card {
      max-width: 90vw;
    }
  }
`;
