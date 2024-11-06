#' Theme_benev
#'
#' @param plot_title_family typo title
#' @param plot_title_color color title
#' @param plot_title_size size title
#' @param plot_subtitle_family typo subtitle
#' @param plot_subtitle_color color subtitle
#' @param plot_subtitle_size size subtitle
#' @param axis_title_family typo axis
#' @param axis_title_color color axis
#' @param axis_title_size size axis
#' @param axis_text_family typo text
#' @param axis_text_color color text
#' @param axis_text_size size text
#' @param ... list of other params
#' @importFrom ggplot2 theme element_text margin
#' @importFrom ggtext element_markdown
#' @return a ggplot theme
#' @export
theme_benev <- function(plot_title_family = "Mulish",
                        plot_title_color = "#3a7139",
                        plot_title_size= 35,
                        plot_subtitle_family = "Montserrat",
                        plot_subtitle_color = "#1C57BC",
                        plot_subtitle_size = 25,
                        axis_title_family = "Montserrat",
                        axis_title_color = "#C12C6D",
                        axis_title_size = 20,
                        axis_text_family = "Montserrat",
                        axis_text_color = "#C12C6D",
                        axis_text_size = 16,
                        ...) {

  theme(
    plot.title = element_markdown(family = plot_title_family,
                                  color = plot_title_color,
                                  size = plot_title_size,
                                  hjust = 0.5,
                                  margin = margin(0, 0, 20, 0)),
    plot.title.position = "plot",
    plot.subtitle = element_text(family = plot_subtitle_family,
                                 color = plot_subtitle_color,
                                 size = plot_subtitle_size),
    axis.title = element_text(family = axis_title_family,
                              color = axis_title_color,
                              size = axis_title_size),
    panel.background = element_rect(fill = "#e8eef8", color = NA),   # Fond blanc sans bordure
    panel.grid.major = element_blank(),                            # Enlève la grille principale                           # Enlève la grille secondaire
    ...
  )

}

