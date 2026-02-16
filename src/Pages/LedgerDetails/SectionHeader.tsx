const SectionHeader = ({ title }: { title: string }) => (
  <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
    <tbody>
      <tr>
        <td
          height={25}
          align="center"
          className="TeamCombo"
          style={{
            background: "linear-gradient(var(--primary-color) 0, #000 100%)",
          }}
        >
          <p
            style={{
              color: "#FFF",
              fontSize: 12,
              fontWeight: "bold",
              marginBottom: 0,
            }}
          >
            {title}
          </p>
        </td>
      </tr>
    </tbody>
  </table>
);

export default SectionHeader;
